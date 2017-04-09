function coverByTile(height, width, tileHeight) {
  const rowTileAmount = Math.ceil(width / tileHeight);
  const columnTileAmount = Math.ceil(height / tileHeight);

  return rowTileAmount * columnTileAmount;
}

module.exports = coverByTile;
