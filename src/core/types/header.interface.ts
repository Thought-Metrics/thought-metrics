export interface DropdownColumn {
  sub_title?: string;
  items: string[];
}

export interface DropdownSection {
  title: string;
  columns: DropdownColumn[];
}

export interface DropdownData {
  label: string;
  description: string;
  sections: DropdownSection[];
}

export interface HeaderProps {
  className?: string;
  onNavigate?: (section: string) => void;
}
