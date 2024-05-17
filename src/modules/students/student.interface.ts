export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};
export type Student = {
  name: {
    first_name: string;
    middle_name: string;
    last_name: string;
  };
  email: string;
  contact: string;
  gender: string;
  address: string;
  gurdian: Gurdian;
};
