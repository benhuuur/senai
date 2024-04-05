import { useState, useEffect } from 'react'
import { Product } from './components/product/product'
import { Api } from './components/api/Api'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { Alert } from './components/alert/alert'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import BasicModal from './components/modal/Modal'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [response, setRespose] = useState(false)
  const position = [-25.42497079695522, -49.27229713671674]

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}&status=${status}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setRespose(true)
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
      }
      setRespose(false)
      console.error(error)
    })
  }, [page, name, status])

  return (
    <>
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1 className={style.title}>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.products}>
              {produtos.map((item) => {
                return (
                  <Product name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
            <h2>Rick and Morty API</h2>
            <div>
              <input className={style.input} type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
              <input className={style.input} type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
              <input className={style.input} type="text" placeholder="Status" value={status} onChange={(event) => setStatus(event.target.value)} />
            </div>
            {response ?
              <div className={style.products}>
                {data.map((item) => {
                  return (
                    <div key={item.id}>
                      <Api name={item.name} species={item.species} gender={item.gender} type={item.type} status={item.status} image={item.image} />
                      <BasicModal text={"Info"} data={item}/>
                    </div>
                  )
                })}
              </div>
              :
              <div className={style.products}>
                <div>
                  <Alert message={"Esta pagina nao contem este personagem"} />
                </div>
              </div>
            }
          </>
        }
        {show === "map" &&

          <>
            <h2>Mapa</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MapContainer center={position} zoom={19} scrollWheelZoom={false} style={{ width: "500px", height: "500px" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        }

      </div>
    </>
  )
}

export default App
