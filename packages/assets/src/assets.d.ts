interface StaticAssetData {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
}

declare module "*.png" {
  const value: StaticAssetData;
  export default value;
}

declare module "*.jpg" {
  const value: StaticAssetData;
  export default value;
}

declare module "*.jpeg" {
  const value: StaticAssetData;
  export default value;
}

declare module "*.svg" {
  const value: StaticAssetData;
  export default value;
}

declare module "*.ico" {
  const value: StaticAssetData;
  export default value;
}
