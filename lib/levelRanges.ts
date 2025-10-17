import levels from "@/data/levels";

// 在模块加载时计算一次关卡范围
export const levelRangeDefinitions = (() => {
  if (levels.length === 0) {
    return [];
  }

  // 获取最小和最大关卡ID
  const levelIds = levels.map(level => level.id).sort((a, b) => a - b);
  const minLevel = levelIds[0];
  const maxLevel = levelIds[levelIds.length - 1];

  // 特殊处理第一组，只包含20关
  const ranges = [];

  // 第一组：1-20关
  const firstGroupEnd = Math.min(minLevel + 14, maxLevel);
  ranges.push({ start: minLevel, end: firstGroupEnd });

  // 后续组：每组40关
  let nextStart = firstGroupEnd + 1;
  const groupSize = 15;

  while (nextStart <= maxLevel) {
    const end = Math.min(nextStart + groupSize - 1, maxLevel);
    ranges.push({ start: nextStart, end });
    nextStart = end + 1;
  }

  return ranges;
})();
