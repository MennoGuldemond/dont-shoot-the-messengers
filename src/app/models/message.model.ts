export interface Message {
  id: any;
  priority: Priority;
}

export enum Priority {
  HIGH = 0,
  NORMAL = 1,
  LOW = 2,
}
