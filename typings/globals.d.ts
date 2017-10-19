declare module '*.vue' {
    import Vue,{ ComponentOptions } from 'vue'
    const value: ComponentOptions<Vue>
    export default value
}

// declare module "vue/types/vue" {
//     interface Vue {
//         $toast: {
//             success: Function,
//             error: Function,
//             info: Function
//         }
//     }
// }

