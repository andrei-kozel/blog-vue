export interface PostType {
  id: string;
  title: string;
  tags: Array<string>;
  body: string;
}

export interface PostCreationType {
  title: string;
  tags: Array<string>;
  body: string;
}
