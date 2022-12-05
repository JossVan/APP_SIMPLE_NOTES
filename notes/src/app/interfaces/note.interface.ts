export interface Note{
  note: string;
  creation_date: Date;
  complete: boolean | number;
  hover: boolean;
}

export interface NoteComplete{
  id: number;
  note: string;
  creation_date: Date;
  complete: boolean | number;
  hover: boolean;
}
