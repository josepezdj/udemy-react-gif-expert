import { GifItem } from "./GifItem";<ul></ul>
import { useFetchGits } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

const {images, isLoading } = useFetchGits( category );

  return (
    <>
      <h3>{ category }</h3>

      { isLoading && <h2>Loading...</h2> }

      <div className="card-grid">
        { images.map((img) => (
          <GifItem key={img.id}
            { ...img }
          />
        ))}
      </div>

    </>
  )
}
