"use client";

import {useState, useRef, useEffect} from "react";
import {Loader2, Maximize, Minimize} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface GamePlayerProps {
    gameName: string;
    gameUrl: string;
    thumbnailUrl: string; // 添加缩略图URL参数
    dictionary: any; // 使用any类型避免类型错误
}

// 游戏加载记录类型
interface GameLoadRecord {
    lastLoaded: number; // 时间戳
    count: number; // 加载次数
}

// 3天的毫秒数
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

export default function GamePlayer({
                                       gameName,
                                       gameUrl,
                                       thumbnailUrl,
                                       dictionary,
                                   }: GamePlayerProps) {
    // 状态管理
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

    // 检查游戏是否最近加载过
    const checkGameLoadHistory = (gameUrl: string): boolean => {
        try {
            // 获取游戏加载历史记录
            const gameLoadHistoryStr = localStorage.getItem("gameLoadHistory");
            if (!gameLoadHistoryStr) return false;

            const gameLoadHistory: Record<string, GameLoadRecord> =
                JSON.parse(gameLoadHistoryStr);

            // 检查当前游戏是否有记录
            if (gameLoadHistory[gameUrl]) {
                const record = gameLoadHistory[gameUrl];
                const now = Date.now();

                // 如果在3天内加载过，并且加载次数 > 1，则认为不需要显示加载状态
                if (now - record.lastLoaded < THREE_DAYS_MS && record.count > 1) {
                    return true; // 最近已加载过
                }
            }

            return false;
        } catch (error) {
            console.error("Error checking game load history:", error);
            return false;
        }
    };

    // 记录游戏加载
    const recordGameLoad = (gameUrl: string) => {
        try {
            // 获取现有记录
            const gameLoadHistoryStr =
                localStorage.getItem("gameLoadHistory") || "{}";
            const gameLoadHistory: Record<string, GameLoadRecord> =
                JSON.parse(gameLoadHistoryStr);

            // 更新当前游戏记录
            const now = Date.now();
            const currentRecord = gameLoadHistory[gameUrl] || {
                lastLoaded: now,
                count: 0,
            };

            gameLoadHistory[gameUrl] = {
                lastLoaded: now,
                count: currentRecord.count + 1,
            };

            // 清理超过3天的记录
            Object.keys(gameLoadHistory).forEach((url) => {
                if (now - gameLoadHistory[url].lastLoaded > THREE_DAYS_MS) {
                    delete gameLoadHistory[url];
                }
            });

            // 保存更新后的记录
            localStorage.setItem("gameLoadHistory", JSON.stringify(gameLoadHistory));
        } catch (error) {
            console.error("Error recording game load:", error);
        }
    };

    // 重置加载状态
    const resetLoadingState = () => {
        // 检查该游戏是否最近已经加载过
        const recentlyLoaded = checkGameLoadHistory(gameUrl);

        if (recentlyLoaded) {
            // 如果最近已加载过，可以跳过加载状态或显示更短的加载状态
            setIsLoading(false);
        } else {
            setIsLoading(true);

            // 清除任何现有的计时器
            if (loadingTimerRef.current) {
                clearTimeout(loadingTimerRef.current);
            }

            // 设置备用计时器，确保加载状态最终会消失
            // 即使iframe的onLoad事件因某些原因未触发
            loadingTimerRef.current = setTimeout(() => {
                setIsLoading(false);
            }, 5000); // 5秒后强制隐藏加载状态
        }
    };

    // 处理iframe加载完成事件
    const handleIframeLoad = () => {
        // 记录游戏已加载
        recordGameLoad(gameUrl);

        // 清除备用计时器
        if (loadingTimerRef.current) {
            clearTimeout(loadingTimerRef.current);
            loadingTimerRef.current = null;
        }

        // 给一点时间让游戏内容完全加载
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    // 监听游戏URL变化，重置加载状态
    useEffect(() => {
        resetLoadingState();
    }, [gameUrl]);

    // 组件卸载时清除计时器
    useEffect(() => {
        return () => {
            if (loadingTimerRef.current) {
                clearTimeout(loadingTimerRef.current);
            }
        };
    }, []);

    // 监听全屏状态变化
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);

            // 在进入/退出全屏模式时调整样式
            if (iframeRef.current && document.fullscreenElement) {
                // 在全屏模式下，调整iframe比例
                iframeRef.current.style.aspectRatio = "4/3";
                iframeRef.current.style.margin = "0 auto";
                iframeRef.current.style.maxHeight = "calc(100vh - 60px)"; // 减去控制栏高度
            } else if (iframeRef.current) {
                // 退出全屏模式时，重置样式
                iframeRef.current.style.aspectRatio = "";
                iframeRef.current.style.margin = "";
                iframeRef.current.style.maxHeight = "";
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    // 处理全屏切换
    const toggleFullscreen = () => {
        if (!containerRef.current) return;

        if (!document.fullscreenElement) {
            // 对整个容器（包含iframe和控制栏）进行全屏操作
            containerRef.current.requestFullscreen().catch((err) => {
                console.error(`全屏错误: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // 检测操作系统类型，用于显示正确的快捷键提示
    const isMac =
        typeof navigator !== "undefined" && /Mac/.test(navigator.platform);

    return (
        <TooltipProvider>
            <div
                ref={containerRef}
                className={`flex flex-col rounded-lg overflow-hidden shadow-lg ${
                    isFullscreen ? "h-screen w-screen" : ""
                }`}
            >
                {/* 游戏区域容器 */}
                <div
                    className={`relative w-full bg-gradient-to-br from-primary/20 to-accent/30 ${
                        isFullscreen ? "flex-grow flex items-center justify-center" : ""
                    }`}
                >
                    {/* 加载状态 - 仅覆盖游戏区域 */}
                    {isLoading && (
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10 text-foreground">
                            <div className="flex flex-col items-center gap-4">
                                <Loader2 className="h-12 w-12 animate-spin text-primary"/>
                                <div className="text-xl font-medium">
                                    {dictionary.gamePage.loading.replace("{gameName}", gameName)}
                                </div>
                                <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary animate-pulse rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <iframe
                        ref={iframeRef}
                        src={gameUrl}
                        key={gameUrl}
                        className={`w-full border-0 ${
                            !isFullscreen ? "md:aspect-[5/3] aspect-[3/5]" : ""
                        }`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        allowFullScreen
                        title={gameName}
                        onLoad={handleIframeLoad}
                    />
                </div>

                {/* 固定在底部的控制栏 */}
                <div
                    className={`player-footer bg-card dark:bg-card/90 text-card-foreground border-t border-border shadow-md ${
                        isFullscreen ? "mt-auto" : ""
                    }`}
                >
                    <div className="flex items-center justify-between px-4 py-2.5">
                        {/* 左侧：游戏信息 */}
                        <div className="flex items-center gap-3">
                            <div className="relative overflow-hidden rounded bg-muted">
                                <img
                                    src={thumbnailUrl}
                                    alt={gameName}
                                    width="50"
                                    height="36"
                                    className="object-cover w-[50px] h-[36px]"
                                    onError={(e) => {
                                        // 加载失败时显示占位图
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/images/games/game-placeholder.webp";
                                    }}
                                />
                            </div>
                            <span className="text-sm font-medium truncate max-w-[160px]">
                {gameName}
              </span>
                        </div>

                        {/* 右侧：操作按钮 */}
                        <div className="flex items-center">
                            {/* 全屏按钮 */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={toggleFullscreen}
                                        className="flex flex-col items-center justify-center hover:text-primary transition-colors"
                                        title={isFullscreen ? "退出全屏" : "全屏模式"}
                                    >
                                        {isFullscreen ? (
                                            <>
                                                <Minimize className="h-5 w-5"/>
                                                <span className="text-xs mt-0.5">退出</span>
                                            </>
                                        ) : (
                                            <>
                                                <Maximize className="h-5 w-5"/>
                                                <span className="text-xs mt-0.5">全屏</span>
                                            </>
                                        )}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center" className="font-sc">
                                    {isFullscreen ? "退出全屏模式" : "进入全屏模式"}
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fade-in {
                        from {
                            opacity: 0;
                            transform: translate(-50%, -10px);
                        }
                        to {
                            opacity: 1;
                            transform: translate(-50%, 0);
                        }
                    }

                    .animate-fade-in {
                        animation: fade-in 0.3s ease-out forwards;
                    }

                    /* 确保全屏时iframe保持响应式且保持比例 */
                    @media (max-height: 500px) {
                        iframe {
                            max-height: calc(100vh - 60px);
                        }
                    }
                `}</style>
            </div>
        </TooltipProvider>
    );
}
