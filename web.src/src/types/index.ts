export interface Section {
  name: String;
  status: Boolean;
  comment: String;
  items: Array<SectionItem>;
  loading?: Boolean;
}

export interface SectionItem {
  domain: String;
  status: Boolean;
  ip: String;
  comment: String;
  editor?: Boolean;
}
