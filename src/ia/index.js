const ApiKeyHercai = 'RtjHwyCkQGTmUm6NyZv3MR9Hoyda11NIMWcuqBR0='
const fetch = require('node-fetch')
const aiLibrary = require('unlimited-ai')
const { gpt } = require('gpti')

let AiTempSave = {}
let AiTempSave2 = {}

/**
 * Mengembalikan daftar model AI yang tersedia untuk teks dan gambar.
 * @async
 * @function models
 * @returns {Promise<Object>} - Models yang tersedia:
 *
 * **Teks:**
 * - gpt-4o-mini
 * - gpt-4-turbo
 * - gpt-4o
 * - grok-2
 * - grok-2-mini
 * - grok-beta
 * - claude-3-opus
 * - claude-3-sonnet
 * - claude-3-5-sonnet
 * - claude-3-5-sonnet-2
 * - gemini
 *
 * **Teks v2:**
 * - gpt-4
 * - gpt-3.5-turbo
 * - text-davinci-003
 * - code-davinci-002
 * - text-curie-001
 * - text-babbage-001
 * - text-ada-001
 * - davinci
 * - curie
 * - babbage
 * - ada
 *
 * **Teks v3:**
 * - v3
 * - v3-32k
 * - turbo
 * - turbo-16k
 * - gemini
 * - llama3-70b
 * - llama3-8b
 * - mixtral-8x7b
 * - gemma-7b
 *
 * **Gambar:**
 * - dalle
 * - v1
 * - v2
 * - lexica
 * - prodia
 * - simurg
 * - animefy
 * - raava
 * - shonin
 *
 * @example
 * //Mendapatkan semua model yang tersedia
 * (async () => {
 * const models = await ai.models();
 * console.log(models);
 * })();
 */
async function models() {
  return {
    text: [
      'gpt-4o-mini',
      'gpt-4-turbo',
      'gpt-4o',
      'grok-2',
      'grok-2-mini',
      'grok-beta',
      'claude-3-opus',
      'claude-3-sonnet',
      'claude-3-5-sonnet',
      'claude-3-5-sonnet-2',
      'gemini'
    ],
    textv2: [
      'gpt-4',
      'gpt-3.5-turbo',
      'text-davinci-003',
      'code-davinci-002',
      'text-curie-001',
      'text-babbage-001',
      'text-ada-001',
      'davinci',
      'curie',
      'babbage',
      'ada'
    ],
    textv3: [
      'v3',
      'v3-32k',
      'turbo',
      'turbo-16k',
      'gemini',
      'llama3-70b',
      'llama3-8b',
      'mixtral-8x7b',
      'gemma-7b'
    ],
    image: [
      'dalle',
      'v1',
      'v2',
      'lexica',
      'prodia',
      'simurg',
      'animefy',
      'raava',
      'shonin'
    ]
  }
}

/**
 * Menghapus isi dari objek `AI Message`, mengatur ulang menjadi keadaan kosong.
 *
 * @async
 * @function clear
 * @returns {Promise<boolean>} Mengembalikan `true` setelah objek dikosongkan.
 *
 * @example
 * // Contoh penggunaan:
 * (async () => {
 * await ai.clear();
 * console.log('Pesan memory berhasil di hapus.');
 * })();
 */
async function clear() {
  AiTempSave = {}
  return true
}

function getModel(modelim) {
  const modelMap = {
    'gpt-4o-mini': 'gpt-4o-mini',
    'gpt-4-turbo': 'gpt-4-turbo-2024-04-09',
    'gpt-4o': 'gpt-4o-2024-08-06',
    'grok-2': 'grok-2',
    'claude-3-opus': 'claude-3-opus-20240229',
    gemini: 'gemini-1.5-flash-exp-0827'
  }
  return modelMap[modelim] || 'gpt-4o-2024-08-06'
}

function getModelImage(modelim) {
  const modelMap = {
    dalle: 'v3/text2image',
    v1: 'v1/text2image',
    v2: 'v2/text2image',
    lexica: 'lexica/text2image',
    prodia: 'prodia/text2image',
    animefy: 'animefy/text2image'
  }
  return modelMap[modelim] || 'v3/text2image'
}

/**
 * Menghasilkan gambar berdasarkan teks yang diberikan menggunakan model AI tertentu.
 *
 * @async
 * @function imageGenV2
 * @param {string} teksnya - Teks deskripsi untuk menghasilkan gambar.
 * @param {string} [model='dalle'] - Model AI yang digunakan untuk menghasilkan gambar (default: 'dalle').
 * @throws {Error} Jika teks tidak disediakan atau terjadi kesalahan HTTP saat mengambil data.
 * @returns {Promise<{ url: string, prompt: string, model: string }>}
 * Objek berisi URL gambar yang dihasilkan, teks input, dan model yang digunakan.
 *
 * @example
 * // Contoh penggunaan:
 * (async () => {
 * // Basic usage
 * const prompt = 'Soto masa depan';
 * const response = await ai.gambar(prompt);
 * console.log(response);
 * })();
 *
 * @example
 * (async () => {
 * //menggunakan models
 * const prompt = 'soto masa depan';
 * const model = 'dalle'; //tambahkan parameter model
 * const response = await ai.gambar(prompt, model);
 * console.log(response);
 * })();
 *
 */
async function imageGenV2(teksnya, model = 'dalle') {
  if (!teksnya) throw new Error('Teks tidak disediakan.')
  const modelOfc = getModelImage(model)
  const url = `https://hercai.onrender.com/${modelOfc}?prompt=${encodeURIComponent(teksnya)}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ApiKeyHercai
    }
  })

  if (!response.ok)
    throw new Error(`Kesalahan HTTP! status: ${response.status}`)
  const apiResponse = await response.json()
  return { url: apiResponse.url, prompt: teksnya, model: model }
}

/**
 * Menghasilkan respons AI berdasarkan input teks yang diberikan.
 *
 * @async
 * @function ia
 * @param {string} text - Teks input yang akan diproses oleh AI.
 *   Contoh: `"Apa itu teori relativitas?"`
 * @param {string} [model='gpt-4o'] - Model AI yang digunakan untuk menghasilkan respons.
 *   Model yang tersedia: `gpt-4o`, `gpt-4-turbo`, `claude-3-opus`, dll.
 * @param {string|boolean} [Sesi=false] - ID sesi percakapan untuk menyimpan riwayat interaksi.
 *   Jika `false`, AI tidak menyimpan percakapan. Jika string, AI akan menyimpan dan menggunakan riwayat chat.
 * @returns {Promise<string>} - Respons AI yang dihasilkan.
 * @throws {Error} Jika teks input tidak disediakan.
 *
 * @example
 * (async () => {
 * // Basic usage
 * const prompt = 'Hallo, cara membuat tempe!';
 * const response = await ai(prompt);
 * console.log(response); //outuput nya
 * })();
 *
 * @example
 * (async () => {
 * // Menggunakan model
 * const prompt = 'Hello!, cara membuat tempe gpt-4o, bagaimana?';
 * const model = 'gpt-4o';
 * const response = await ai(prompt, model);
 * console.log(response);
 * })();
 *
 * @example
 * (async () => {
 * // Menggunakan memory/sesi percakapan
 * const prompt = 'Hello!';
 * const model = 'gpt-4o';
 * const Sesinya = 'Z7nM9wUb61zi01Ma';
 * const response = await ai(prompt, model, Sesinya);
 * console.log(response);
 * })();
 */
async function ia(text, model = 'gpt-4o', Sesi = false) {
  if (!text) throw new Error('Teks tidak disediakan.')
  const modelOfc = getModel(model)

  // Jika tidak menggunakan sesi, AI hanya merespons tanpa menyimpan percakapan
  if (!Sesi) {
    return await aiLibrary.generate(modelOfc, [{ role: 'user', content: text }])
  } else {
    // Inisialisasi sesi jika belum ada
    if (!AiTempSave[model]) AiTempSave[model] = {}
    if (!AiTempSave[model][Sesi]) AiTempSave[model][Sesi] = []

    // Format riwayat percakapan dengan input terbaru
    const formattedMessages = [
      ...AiTempSave[model][Sesi],
      { role: 'user', content: text }
    ]

    // Mengirim permintaan ke model AI
    const response = await aiLibrary.generate(modelOfc, formattedMessages)

    // Menyimpan respons AI ke dalam sesi
    AiTempSave[model][Sesi].push({ role: 'assistant', content: response })

    // Membatasi panjang riwayat percakapan maksimal 10 interaksi terakhir
    AiTempSave[model][Sesi] = AiTempSave[model][Sesi].slice(-10)

    return response
  }
}

/**
 * Menghasilkan teks menggunakan model AI versi 2 dengan dukungan percakapan berkelanjutan.
 *
 * @async
 * @function textV2
 * @param {string} input - Teks input yang akan diproses oleh AI.
 *   Contoh: `"Jelaskan teori relativitas secara singkat."`
 * @param {string} [model='gpt-4'] - Model AI yang digunakan untuk menghasilkan respons.
 *   Model yang tersedia: `gpt-4`, `gpt-4o`, `gpt-4-turbo`, `gpt-3.5-turbo`, `claude-3-opus`, `gemini`, dll.
 * @param {string|boolean} [Sesi=false] - ID chat yang digunakan untuk menyimpan riwayat percakapan.
 *   Jika `false`, AI akan merespons tanpa mempertahankan riwayat percakapan.
 * @returns {Promise<string>} - Respons teks yang dihasilkan oleh AI.
 * @throws {Error} Jika teks input tidak disediakan (`Error: Teks tidak disediakan.`).
 *
 * @example
 * (async () => { // Basic usage
 *   const t = 'Hello, cara membuat tempe v2!';
 *   const r = await ai.v2(t);
 *   console.log(r)
 * })();
 *
 * @example
 * (async () => {
 * // menggunakan model
 * const prompt = 'Hello, v2. Cara membuat tempe!';
 * const model = 'gpt-4o';
 * const response = await ai.v2(prompt, model);
 * console.log(response);
 * })();
 *
 * @example
 * (async () => {
 * // menggunakan sesi percakapan
 * const prompt = 'Hello, v2!, Cara membuat tempe';
 * const model = 'gpt-4o';
 * const chatId = 'Z7nM9wUb61zi01Ma';
 * const response = await ai.v2(prompt, model, chatId);
 * console.log(response);
 * })();
 */
async function textV2(input, model = 'gpt-4', Sesi = false) {
  if (!input) throw new Error('Teks tidak disediakan.')

  // Menyusun riwayat percakapan jika Sesi disediakan
  const messages = Sesi
    ? [...(AiTempSave2[model]?.[Sesi] || []), { role: 'user', content: input }]
    : [{ role: 'user', content: input }]

  // Mengirim permintaan ke API GPT
  const response = await gpt.v1({
    messages,
    model,
    prompt: input,
    markdown: false
  })

  // Menyimpan riwayat percakapan jika Sesi digunakan
  if (Sesi) {
    AiTempSave2[model] = AiTempSave2[model] || {}
    AiTempSave2[model][Sesi] = (AiTempSave2[model][Sesi] || []).slice(-10)
    AiTempSave2[model][Sesi].push({
      role: 'assistant',
      content: response.gpt
    })
  }

  return response.gpt
}

/**
 * Menghasilkan teks menggunakan model AI versi 3.
 *
 * @async
 * @function textV3
 * @param {string} input - Teks input yang akan diproses oleh AI.
 *   Contoh: `"Apa yang dimaksud dengan kecerdasan buatan?"`
 * @param {string} [model='v3'] - Model AI yang digunakan untuk menghasilkan respons.
 *   Model yang tersedia: `v3`, `v3-32k`, `turbo`, `turbo-16k`, `gemini`, `llama3-70b`, dll.
 * @returns {Promise<string>} - Respons teks yang dihasilkan oleh AI.
 * @throws {Error} Jika teks input tidak disediakan atau terjadi kesalahan HTTP saat permintaan API.
 *
 * @example
 * //tidak ada sesi percakapan
 * (async () => {
 * // Basic usage
 * const prompt = 'Hello, Cara membuat tempe v3!';
 * const response = await ai.v3(prompt);
 * console.log(response);
 * })();
 *
 * @example
 * (async () => {
 * // Menggunakan models
 * const prompt = 'Hello, v3!, bagaimana membuat tempe';
 * const model = 'gpt-4o';
 * const response = await ai.v3(prompt, model);
 * console.log(response);
 * })();
 */
async function textV3(input, model = 'v3') {
  if (!input) throw new Error('Teks tidak disediakan.')

  const url = `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(input)}&model=${model}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ApiKeyHercai
    }
  })

  if (!response.ok) throw new Error(`Kesalahan: ${response.status}`)

  return (await response.json()).reply
}

/**
 * Objek `ai` yang menggabungkan berbagai fungsi AI yang tersedia.
 *
 * @constant {Object} ai
 * @property {Function} models - Mengembalikan daftar model AI yang tersedia.
 * @property {Function} clear - Menghapus cache atau penyimpanan sementara (jika tersedia).
 * @property {Function} gambar - Menghasilkan gambar dari teks menggunakan `imageGenV2`.
 * @property {Function} v3 - Menghasilkan teks menggunakan AI versi 3 (`textV3`).
 * @property {Function} v2 - Menghasilkan teks menggunakan AI versi 2 (`textV2`).
 */

const ai = Object.assign(ia, {
  models,
  clear,
  gambar: imageGenV2,
  v3: textV3,
  v2: textV2
})

module.exports = ai
