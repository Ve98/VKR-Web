export interface DataSourceFilter {
  name: string;
  type: 'text' | 'range';
  options?: string[];
  defaultValue?: string;
}
