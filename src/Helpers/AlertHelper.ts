import Swal from "sweetalert2";

export const baseAlert = (title: string | undefined, subTitle: string | undefined, type: any) => Swal.fire(title, subTitle, type);
