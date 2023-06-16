# SETTING UP ENVIRONMENT

### Using Webstorm IDE
In this case, i use Webstrom IDE so the Environment of Express js would be easy.
* New Project > choose `Express` > (Make sure __node__ has been installed in your local)
* Let other option be default :
* Express-generator = `npx --package express-generator express`
* View Engine = `Pug` (Jade)
* Stylesheet Engine = `Plain CSS`
* Create

Wait until all packages had been installed, then the express js env has been finished

### Installing TensorFlow.js for Node :
```
npm install @tensorflow/tfjs-node
or
yarn add @tensorflow/tfjs-node
```
Troubleshoot for Windows (error saat instalasi diatas) :
* Install Visual C++ build environment manually [Download here](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)
* Choose __Desktop development with C++" workload__  

# AUTHENTICATION USER
Login Logout and who's inside me are using session in tables SQL
3 Main file 
* controllers/Authentication.js
* routes/AuthenticationRoute.js
* app.js (to use create table session)

## Session User
this session user is using to keep the session-cookie of user when the server is being restart, but the user is not logout
- Depedency : 
`npm install connect-session-sequelize`
- import the packages in to the main app `import SequelizeStore from "connect-session-sequelize";`
- Create variables in main app, with `SequelizeStore(session.Store)`
- Create table session in DB using `store.sync();`
- after table create, you can disable the function above
- done

## APIs Documentation
<details>
<summary>USER REGISTER</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `POST`
- Endpoint: `/users/register`
- Body:

| KEY | VALUE |
| --- | --- |
| `name` | string |
| `email` | string |
| `password` | string |
| `confPassword` | string |

Response:
```json
{
    "msg": "Register Berhasil, data telah dimasukan ke database"
}
```
</details>

<details>
<summary>USER LOGIN</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com
  
request :
- Method : `POST`
- Endpoint: `/login`
- Body:

| KEY | VALUE |
| --- | --- |
| `email` | string |
| `password` | string |


Response:
```json
{
    "error": "false",
    "msg": "success",
    "loginResult": {
        "uuid": "a2e48f2b-c98a-46fa-908c-2e02365a88ee",
        "name": "Nishfa Azizah",
        "email": "nishfa@gmail.com",
        "role": "user",
        "sessionID": "t_Jmo3YGoIgrqGQ-HjGTdOIKUWnfAdjO"
    }
}
```
</details>

<details>
<summary>GET USER BY ID</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com
  
request :
- Method : `GET`
- Endpoint: `/users/{id}`

  
Response:
```json
{
    "uuid": "a2e48f2b-c98a-46fa-908c-2e02365a88ee",
    "name": "Nishfa Azizah",
    "email": "nishfa@gmail.com",
    "role": "user"
}
```
</details>


<details>
<summary>USER UPDATE</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `PATCH`
- Endpoint: `/users/update/{id}`
- Body:

| KEY | VALUE |
| --- | --- |
| `name` | string |
| `email` | string |
| `password` | string |
| `confPassword` | string |

Response:
```json
{
    "msg": "User telah diupdate!"
}
```
</details>


<details>
<summary>USER LOGOUT</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `DELETE`
- Endpoint: `/logout`

Response:
```json
{
    "msg": "Logout berhasil!"
}
```
</details>


<details>
<summary>GET ALL STORIES</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `GET`
- Endpoint: `/stories`

Response:
```json
{
        "uuid": "f9bf7d62-45ff-4ba5-9d91-2067414034cd",
        "description": "story pertama wulan",
        "attachment": "https://storage.googleapis.com/cycleme-cloud-storage/20230613-051059",
        "user": {
            "name": "Rizki Wulandari From UGM",
            "email": "wulan@gmail.com"
        }
    },
    {
        "uuid": "142df73c-3911-46f4-99e8-395279da51d4",
        "description": "story kedua wulan updated",
        "attachment": "https://storage.googleapis.com/cycleme-cloud-storage/20230613-051306",
        "user": {
            "name": "Rizki Wulandari From UGM",
            "email": "wulan@gmail.com"
        }
    },
    {
        "uuid": "eb5813a8-3bf8-499a-a462-7cd68d41e166",
        "description": "story test dari malam",
        "attachment": "",
        "user": {
            "name": "Test Malam",
            "email": "malam@gmail.com"
        }
    }
```
</details>



<details>
<summary>CREATE STORIES</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `POST`
- Endpoint: `/stories/create`
- Body:

| KEY | VALUE |
| --- | --- |
| `description` | string |
| `attachment` | binary/image |


Response:
```json
{
    "msg": "Story posted Successfuly",
    "createdStory": {
        "uuid": "730af6a3-8b5e-4366-936f-a050da42c17f",
        "id": 30,
        "description": "test",
        "attachment": "https://storage.googleapis.com/cycleme-cloud-storage/20230616-140742",
        "userId": 8,
        "updatedAt": "2023-06-16T14:07:43.629Z",
        "createdAt": "2023-06-16T14:07:43.629Z"
    }
}
```
</details>



<details>
<summary>GET MY STORIES</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `POST`
- Endpoint: `/stories/me`

  
Response:
```json
[
    {
        "uuid": "730af6a3-8b5e-4366-936f-a050da42c17f",
        "description": "test",
        "attachment": "https://storage.googleapis.com/cycleme-cloud-storage/20230616-140742",
        "user": {
            "name": "Nishfa Azizah Updated",
            "email": "nishfa@gmail.com"
        }
    }
]
```
</details>



<details>
<summary>EDIT STORIES</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `PATCH`
- Endpoint: `/stories/edit/{id}`
- Body:

| KEY | VALUE |
| --- | --- |
| `description` | string |
| `attachment` | binary/image |


Response:
```json
{
    "msg": "Your Story has been updated successfuly"
}
```
</details>



<details>
<summary>GET STORIES BY ID</summary>
URL : https://backend-dot-cycleme-2023.et.r.appspot.com

Request:

- Method: `GET`
- Endpoint: `/stories/{id}`


Response:
```json
{
    "uuid": "730af6a3-8b5e-4366-936f-a050da42c17f",
    "description": "test",
    "attachment": "https://storage.googleapis.com/cycleme-cloud-storage/20230616-140742",
    "user": {
        "name": "Nishfa Azizah Updated",
        "email": "nishfa@gmail.com"
    }
}
```
</details>




<details>
<summary>GET ALL RECOMENDATION RECYCLE</summary>
URL :  https://recomendation-api-dot-cycleme-2023.et.r.appspot.com/

Request:

- Method: `GET`
- Endpoint: `/`


Response:
```json
{
   ALL CATEGORY
}
```
</details>



<details>
<summary>POST PICTURE TO GET RECOMENDATION</summary>
URL :  https://recomendation-api-dot-cycleme-2023.et.r.appspot.com/

Request:

- Method: `POST`
- Endpoint: `/`
- Body :
  
```json
{
   "category" : "Plastic"
}
```


Response:
```json
[
    {
        "id": 1,
        "name": "Lentera",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Lentera.jpg",
        "desc": "https://www.youtube.com/watch?v=ajVDmEGFKKc"
    },
    {
        "id": 2,
        "name": "Enchanted Rose",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Enchanted%20Rose.jpg",
        "desc": "https://www.youtube.com/watch?v=cGJdhgCA9JE"
    },
    {
        "id": 3,
        "name": "Vas Bunga Pararel",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Vas%20Bunga%20Pararel.jpg",
        "desc": "https://youtu.be/hYDkLNW4deU"
    },
    {
        "id": 4,
        "name": "Vas Bunga",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Vas%20Bunga.jpg",
        "desc": "https://youtu.be/MTZnGNrePXY"
    },
    {
        "id": 5,
        "name": "Wadah Serbaguna",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Wadah%20Serbaguna.jpg",
        "desc": "https://youtu.be/W-0svOtUc-U"
    },
    {
        "id": 6,
        "name": "Rak Gantung",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Rak%20Gantung.jpg",
        "desc": "https://youtu.be/wTeeAr2HEKM"
    },
    {
        "id": 7,
        "name": "Rak Sudut",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Rak%20Sudut.jpg",
        "desc": "https://youtu.be/-l7rjLYDlhA"
    },
    {
        "id": 8,
        "name": "Pen Holder",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Pen%20Holder.jpg",
        "desc": "https://youtu.be/ebvbcGuWXZ4"
    },
    {
        "id": 9,
        "name": "Keranjang",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Keranjang%20Kecil.jpg",
        "desc": "https://youtu.be/WpGynk87f7o"
    },
    {
        "id": 10,
        "name": "Dekorasi Selamat Datang",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Dekorasi%20Selamat%20Datang.jpg",
        "desc": "https://youtu.be/EPoDzLTlmyY"
    },
    {
        "id": 11,
        "name": "Dompet",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Dompet.jpg",
        "desc": "https://youtu.be/qhvMipgRDMc"
    },
    {
        "id": 12,
        "name": "Dekorasi Dinding",
        "image": "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Dekorasi%20Dinding.jpg",
        "desc": "https://youtu.be/f4V0yEtXtH4"
    }
]
```
</details>



<details>
<summary>GET ALL RECOMENDATION RECYCLE</summary>
URL :   https://ml-api-ilhkkpshpa-uc.a.run.app

Request:

- Method: `POST`
- Endpoint: `/predict`
- Body :
 
| KEY | VALUE |
| --- | --- |
| `image` | binary/image |


Response:
```json
{
    "accuracy": "96.33%",
    "class_label": "Glass"
}
```
</details>




<details>
<summaryWEB FEEDBACK API</summary>
URL :   https://feedback-api-ilhkkpshpa-uc.a.run.app/

Request:

- Method: `POST`
- Endpoint: `/feedback`
- Body :
 
| KEY | VALUE |
| --- | --- |
| `email` | string |
| `subject` | string |
| `message` | string |



Response:
```json
Terima kasih atas umpan balik anda!
```
</details>
