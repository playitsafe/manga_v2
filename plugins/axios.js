
import md5 from 'js-md5';

export default function ({ $axios, params, redirect }) {
  /**
   *
   * @param {String} path
   * @param {Object} params { id: 7 }
   * @param {String} secretKey
   */
  const sign = (path, params, secretKey) => {
    let paramKeys = []
    for (let k in params) paramKeys.push(encodeURIComponent(k))
    paramKeys.sort()
    let paramItemsForSign = []
    for (let i = 0; i < paramKeys.length; i++) {
      let k = paramKeys[i]
      let v = encodeURIComponent(params[k])
      paramItemsForSign.push(k + '=' + v)
    }
    let strForSign = '/api' + path + paramItemsForSign.join('&') + secretKey
    console.log('strForSign', strForSign)
    return md5(strForSign)
  };

  $axios.onRequest(config => {
    if(config.params === undefined) {
      config.params = {}
    }
    config.params.sign = sign(config.url, config.params, '66c10a61bd916c23f3b33810d3785d17');
    // const concat = config.url.indexOf("?") !== -1 ? "&" : "?";
    //config.url = '/content/detail?id=3' or '/homepage/promotions'
    //当请求api含参时,截取参数前的url'/content/detail'
    // const url = config.url.split('?')[0];
    // config.url = config.url + concat + 'sign=' + sign(url, currentRequestParams, '66c10a61bd916c23f3b33810d3785d17');
    // console.log('Making request to ' + config.url)
  })


  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

}
