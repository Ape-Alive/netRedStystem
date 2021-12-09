export default {
dev:{
  '/api':{
    target:'',
    changeOrigin:true,
    pathRewrite:{'^':''},

  }
},
test:{
  '/api':{
    target:'',
    changeOrigin:true,
    pathRewrite:{'^':''}
  }
},
pro:{
    '/api':{
      target:'',
      changeOrigin:true,
      pathRewrite:{'^':''}
    }
}
}
