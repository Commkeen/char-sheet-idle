
export class DieDef {
  constructor(
    public count: number,
    public faces: number,
    public cost: number
    ) { }

    roll(): number {
      let total = 0;
      for (let i = 0; i < this.count; i++) {
        total += Math.floor(Math.random()*this.faces) + 1;
      }
      return total;
    }
}

export const DIE_LIBRARY: DieDef[] = [
  new DieDef(1, 4, 1),
  new DieDef(1, 6, 1),
  new DieDef(1, 8, 5),
  new DieDef(1, 10, 8),
  new DieDef(2, 6, 14),
  new DieDef(2, 8, 20),
  new DieDef(3, 6, 30),
  new DieDef(3, 8, 45),
  new DieDef(4, 6, 70),
  new DieDef(4, 8, 100),
  new DieDef(6, 6, 150)
];
