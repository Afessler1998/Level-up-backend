function getHorizontalGuides(peakValue, paddingDimensions, yIncrement) {
  const { paddingValue, paddedHeight, paddedWidth } = paddingDimensions;

  const horizontalGuides = [];

  const horizontalGuideNum = peakValue / yIncrement;
  const horizontalGuideOffset = paddedHeight / horizontalGuideNum;

  for (let i = horizontalGuideNum; i > 0; i--) {
    const horizontalGuide = {};

    if (yIncrement === 1000) horizontalGuide.label = `${i}k`;
    else if (yIncrement === 50) horizontalGuide.label = `${i * 50}`;
    else horizontalGuide.label = `${i}`;

    horizontalGuide.x1 = paddingValue;
    horizontalGuide.x2 = paddingValue + paddedWidth;
    horizontalGuide.y = paddedHeight - horizontalGuideOffset * i + paddingValue;

    horizontalGuides.push(horizontalGuide);
  }

  return horizontalGuides;
}

module.exports = getHorizontalGuides;
