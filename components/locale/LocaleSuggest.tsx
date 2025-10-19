"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { langSwitcherData } from "@/components/common/LangSwitcherData";
import type { Locale } from "@/i18n";
import { i18n } from "@/i18n";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useDictionary } from "@/hooks/useDictionary";

const STORAGE_KEY_PERMANENT = "locale-suggest-dismissed-permanent";
const STORAGE_KEY_DAILY = "locale-suggest-dismissed-daily";

interface LocaleSuggestProps {
  currentLang: string;
}

export default function LocaleSuggest({ currentLang }: LocaleSuggestProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast, dismiss } = useToast();
  const toastIdRef = useRef<string | null>(null);
  const dict = useDictionary();

  const currentLangData = langSwitcherData.find(
    (lang) => lang.locale === currentLang
  );

  // 使用 useMemo 稳定化字典对象，避免不必要的重新渲染
  const localeSuggestDict = useMemo(
    () => dict.common.localeSuggest,
    [dict.common.localeSuggest]
  );

  const redirectedPathName = useCallback(
    (locale: string) => {
      if (!pathname) return "/";
      const segments = pathname.split("/").filter(Boolean);

      if (segments.length > 0 && i18n.locales.includes(segments[0] as Locale)) {
        segments[0] = locale;
      } else {
        segments.unshift(locale);
      }
      return `/${segments.join("/")}`;
    },
    [pathname]
  );

  // 处理切换语言并设置每日不再提示标记
  const handleAccept = useCallback(
    (locale: string) => {
      console.log("[语言建议] handleAccept 函数被调用，区域设置:", locale);
      // 立即关闭当前的 toast
      if (toastIdRef.current) {
        dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
      // 在导航之前设置每日不再提示标记
      const today = new Date().toISOString().split("T")[0];
      console.log(
        `[语言建议] 设置每日 localStorage 标记: ${STORAGE_KEY_DAILY} = ${today}`
      );
      localStorage.setItem(STORAGE_KEY_DAILY, today);

      // 导航到新路径
      const newPath = redirectedPathName(locale);
      router.push(newPath);
    },
    [dismiss, router, redirectedPathName]
  );

  // 处理设置永久不再提示标记
  const handleDismissPermanent = useCallback(() => {
    console.log("[语言建议] handleDismissPermanent 函数被调用。");
    // 立即关闭当前的 toast
    if (toastIdRef.current) {
      dismiss(toastIdRef.current);
      toastIdRef.current = null;
    }
    console.log(
      `[语言建议] 设置永久 localStorage 标记: ${STORAGE_KEY_PERMANENT} = true`
    );
    localStorage.setItem(STORAGE_KEY_PERMANENT, "true");
  }, [dismiss]);

  useEffect(() => {
    console.log("[语言建议] useEffect 触发。");

    // 防抖：如果已经有 toast 显示，不要重复创建
    if (toastIdRef.current) {
      console.log("[语言建议] 已有 toast 显示，跳过重复创建。");
      return;
    }

    // 1. 首先检查是否已永久关闭
    const permanentlyDismissed = localStorage.getItem(STORAGE_KEY_PERMANENT);
    console.log(
      `[语言建议] 永久关闭标记 ('${STORAGE_KEY_PERMANENT}'):`,
      permanentlyDismissed
    );
    if (permanentlyDismissed === "true") {
      console.log("[语言建议] 建议已被永久关闭，函数返回。");
      return;
    }

    // 2. 检查是否今日已关闭
    const today = new Date().toISOString().split("T")[0];
    const dismissedDate = localStorage.getItem(STORAGE_KEY_DAILY);
    console.log(
      `[语言建议] 从 localStorage 获取的关闭日期 ('${STORAGE_KEY_DAILY}') :`,
      dismissedDate
    );
    console.log(`[语言建议] 今日日期:`, today);

    if (dismissedDate === today) {
      console.log("[语言建议] 今日已关闭建议，函数返回。");
      return;
    }
    // 可选：清除过期的每日关闭日期
    else if (dismissedDate && dismissedDate !== today) {
      console.log("[语言建议] 发现过期的每日关闭日期，正在清除。");
      localStorage.removeItem(STORAGE_KEY_DAILY);
    }

    const browserLang = navigator.language.toLowerCase();
    const normalizedLang = browserLang.split("-")[0] as Locale;
    console.log(
      `[语言建议] 浏览器语言 (标准化后): ${normalizedLang}, 当前页面语言: ${currentLang}`
    );

    const condition1 = normalizedLang !== currentLang; // 条件1: 浏览器语言与当前语言不同
    const condition2 = i18n.locales.includes(normalizedLang); // 条件2: 浏览器语言是网站支持的语言
    console.log(
      `[语言建议] 条件检查: 语言不同=${condition1}, 支持该语言=${condition2}`
    );

    if (condition1 && condition2) {
      // 添加额外日志，观察是否在不应进入时进入此块
      console.log("[语言建议] DEBUG: 进入 potentially show toast 的 'if' 块。");
      const suggestion = langSwitcherData.find(
        (lang) => lang.locale === normalizedLang
      );
      console.log("[语言建议] 找到建议的语言数据:", suggestion);
      console.log("[语言建议] 找到当前的语言数据:", currentLangData);

      if (suggestion && currentLangData) {
        console.log("[语言建议] 条件满足，通过 setTimeout 调用 toast()...");
        const timerId = setTimeout(() => {
          // 创建 toast 时存储其 ID
          const { id } = toast({
            title: localeSuggestDict.switchToTitle.replace(
              "{langName}",
              suggestion.name
            ),
            description: (
              <>
                <span>
                  {localeSuggestDict.currentLangDesc.replace(
                    "{langName}",
                    currentLangData.name
                  )}
                </span>
                <button
                  onClick={handleDismissPermanent}
                  className="mt-2 block text-xs text-muted-foreground underline hover:text-foreground"
                >
                  {localeSuggestDict.dismissPermanent}
                </button>
              </>
            ),
            duration: 15000, // 持续时间略微增加
            // 切换语言的操作按钮
            action: (
              <ToastAction
                altText={localeSuggestDict.switchToAlt.replace(
                  "{langName}",
                  suggestion.name
                )}
                onClick={() => handleAccept(suggestion.locale)}
                className="flex items-center gap-1.5" // 添加 class 用于布局
              >
                <img
                  src={suggestion.icon}
                  alt=""
                  width="16"
                  height="16"
                  className="h-4 w-4 rounded-sm object-cover" // 调整尺寸
                />
                {localeSuggestDict.switchToButton}
              </ToastAction>
            ),
          });
          console.log("[语言建议] Toast 已创建，ID:", id);
          toastIdRef.current = id; // 存储 ID
        }, 1000); // 延迟增加到 2000ms

        return () => {
          console.log(
            "[语言建议] useEffect 清理: 正在清除 setTimeout 定时器。"
          );
          clearTimeout(timerId);
          // --- 添加 toast 清理逻辑 ---
          if (toastIdRef.current) {
            console.log(
              "[语言建议] 清理: 尝试关闭 Toast，ID:",
              toastIdRef.current
            );
            dismiss(toastIdRef.current);
            // 可选：重置 ref，尽管下一次 effect 运行应该会处理它。
            // toastIdRef.current = null;
          }
          // --- 清理逻辑结束 ---
        };
      }
    }
    // 防御性措施: 如果条件不满足，尝试关闭任何存在的 toast
    else {
      if (toastIdRef.current) {
        console.log("[语言建议] 条件不满足，尝试关闭存在的 toast (如果有)。");
        dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
    }

    return undefined;
  }, [
    currentLang,
    currentLangData,
    pathname,
    dismiss,
    handleAccept,
    handleDismissPermanent,
    toast,
    localeSuggestDict,
  ]);

  return null;
}
