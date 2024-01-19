import autoprefixer from 'autoprefixer';
export default {
    //other Vite config options...

    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
};