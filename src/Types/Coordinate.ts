export default class Coordinate {
  private row?: number;
  private column?: number;
  
  constructor (...coordinate: number[] | undefined[]) {
    this.row = coordinate[0];
    this.column = coordinate[1];
  }

  public get Row(): number | undefined {
    return this.row;
  }

  public get Column(): number | undefined {
    return this.column;
  }
}