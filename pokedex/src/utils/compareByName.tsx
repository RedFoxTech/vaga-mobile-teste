interface ParamProps {
  name: string;
}

export default function compareByName(a: ParamProps, b: ParamProps): number {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
