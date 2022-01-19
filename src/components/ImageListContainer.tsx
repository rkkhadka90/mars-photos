import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootReducers } from '../redux/reducers';

interface ImageListContainerProps {

}

export const ImageListContainer: React.FC<ImageListContainerProps> = ({}) => {
    const images = useSelector((state: RootReducers) => state.allImages.images);
  const renderList = images.map((image: any) => {
    const { id, img_src, earth_date, rover } = image;
    return (
      <div className="four wide column" key={id}>
          <div>
          <img src={img_src} alt={img_src} />
          </div>
        {/* <Link to={`/image/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
              </div>
              <div className="content">
                <div className="meta">{earth_date}</div>
                <div className="card">{rover.name}</div>
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    );
  });

  return <>{renderList}</>;    
}

