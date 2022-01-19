import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ImageListContainer } from '../components/ImageListContainer';
import { fetchImages } from '../redux/actions/ImageAction';

interface ImageListingProps {

}

export const ImageListing: React.FC<ImageListingProps> = ({}) => {
     const images = useSelector(state => state)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(fetchImages('curiosity'));
          }, []);
        console.log('images: ', images)
          
        return (
            <ImageListContainer/>
        );
}