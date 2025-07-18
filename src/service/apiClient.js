import axios from 'axios';
import log from 'loglevel';

const defaultTimeout = 5000;

/**
 * API実行・結果取得
 * doFetch
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @param {boolean} [isBinary=false] - バイナリデータとして取得するかどうか
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doFetch(endpoint, errMsg, timeout = defaultTimeout, isBinary = false) {
    try {
        const response = await axios.get(endpoint, {
            timeout,
            withCredentials: true,
            responseType: isBinary ? 'blob' : 'json',
        });
        const resultData = response.data;
        return resultData;
    } catch (error) {
        log.error(errMsg || 'Error fetching data:', error);
        return Promise.reject(error);
    }
}

/**
 * API実行・結果取得（POST）
 * doPostCommon
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {Object} payload - POSTリクエストのペイロード
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @param {boolean} [isBinary=false] - バイナリデータとして取得するかどうか
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doPostCommon(endpoint, payload, errMsg, timeout = defaultTimeout, isBinary = false) {
    try {
        const response = await axios.post(endpoint, payload, {
            timeout,
            withCredentials: true,
            responseType: isBinary ? 'blob' : 'json',
        });
        return response;
    } catch (error) {
        log.error(errMsg || 'Error posting data:', error);
        return Promise.reject(error);
    }
}

/**
 * API実行・結果取得（POST）
 * doPost
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {Object} payload - POSTリクエストのペイロード
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @param {boolean} [isBinary=false] - バイナリデータとして取得するかどうか
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doPost(endpoint, payload, errMsg, timeout = defaultTimeout, isBinary = false) {
    const response = await doPostCommon(endpoint, payload, errMsg, timeout, isBinary);
    return response.data;
}

/**
 * API実行・結果取得（POST）
 * doPostDownload
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {Object} payload - POSTリクエストのペイロード
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @param {boolean} [isBinary=false] - バイナリデータとして取得するかどうか
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doPostDownload(endpoint, payload, errMsg, timeout = defaultTimeout, isBinary = false) {
    const response = await doPostCommon(endpoint, payload, errMsg, timeout, isBinary);
    return {
        data: response.data,
        headers: response.headers,
    };
}

/**
 * API実行・結果取得（PUT）
 * doPut
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {Object} payload - PUTリクエストのペイロード
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doPut(endpoint, payload, errMsg, timeout = defaultTimeout) {
    try {
        const response = await axios.put(endpoint, payload, {
            timeout,
            withCredentials: true,
        });
        const resultData = response.data;
        return resultData;
    } catch (error) {
        log.error(errMsg || 'Error putting data:', error);
        return Promise.reject(error);
    }
}

/**
 * API実行・結果取得（DELETE）
 * doDelete
 *
 * @async
 * @param {string} endpoint - エンドポイント
 * @param {string} errMsg - エラーメッセージ
 * @param {number} [timeout=defaultTimeout] - タイムアウト時間（ミリ秒）
 * @returns {Promise<Object>} - APIの結果データ
 */
async function doDelete(endpoint, errMsg, timeout = defaultTimeout) {
    try {
        const response = await axios.delete(endpoint, {
            timeout,
            withCredentials: true,
        });
        const resultData = response.data;
        return resultData;
    } catch (error) {
        log.error(errMsg || 'Error deleting data:', error);
        return Promise.reject(error);
    }
}

export { doFetch as doFetch, doPost, doPut, doDelete, doPostDownload };
