interface action {
  name: string;
  sets: number;
  reps: number;
}

export class routineTemplates {
  public static chest: action[] = [
    { name: "Barbell Bench Press", sets: 3, reps: 3 },
    { name: "Incline Bench Press", sets: 3, reps: 3 },
    { name: "Pushups", sets: 3, reps: 3 },
  ];
}
