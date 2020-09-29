interface ParamProps {
  id: number;
}

export default function compareById(a: ParamProps, b: ParamProps): number {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
