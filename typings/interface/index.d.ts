/**
 * tsconfig.json 更改 "module"值为 "esnext",
 * 使用了ESmodule所用可以使用 component: () => import('../views/front/app')
 * 的形式来分割代码，不再使用require.ensure的形式，所以下面接口注释
 */
// interface WebpackRequire extends NodeRequire {
//   ensure(
//     dependencies: string[],
//     callback: (require: WebpackRequire) => void,
//     errorCallback?: (error: Error) => void,
//     chunkName?: string
//   ): void;
// }

