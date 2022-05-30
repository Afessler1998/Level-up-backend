function getHorizontalGuides(peakValue, paddingDimensions, yIncrement) {
  const { paddingValue, paddedHeight, paddedWidth } = paddingDimensions;

  const horizontalGuides = [];

  //if peak value is odd number then add one to accomadate for large distance graphs
  const horizontalGuideNum = peakValue / yIncrement;
  const horizontalGuideOffset = paddedHeight / horizontalGuideNum;

  for (let i = horizontalGuideNum; i > 0; i--) {
    const horizontalGuide = {};

    //yIncrement is 1000 for volume graph
    if (yIncrement === 1000) horizontalGuide.label = `${i}k`;
    //yIncrement is 50 for estimated max graph
    else if (yIncrement === 50) horizontalGuide.label = `${i * 50}`;
    //yIncrement is 10 for very large distance graphs
    else if (yIncrement === 10) horizontalGuide.label = `${i * 10}`;
    //yIncrement is 2 for large distance graph
    else if (yIncrement === 2) horizontalGuide.label = `${i * 2}`;
    else horizontalGuide.label = `${i}`;

    horizontalGuide.x1 = paddingValue;
    horizontalGuide.x2 = paddingValue + paddedWidth;
    horizontalGuide.y = paddedHeight - horizontalGuideOffset * i + paddingValue;

    horizontalGuides.push(horizontalGuide);
  }

  return horizontalGuides;
}

module.exports = getHorizontalGuides;
