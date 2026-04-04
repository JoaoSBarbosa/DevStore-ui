export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: "checkbox" | "radio";
  options: FilterOption[];
}
