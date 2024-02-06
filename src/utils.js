// 靜態資源的引入方式
export const getAssetsUrl = (path)=>{
    return new URL(`./assets/${path}`,import.meta.url).href
};
