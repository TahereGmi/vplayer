import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getVideoList, selectedValue } from '../store/reducers/videoListReducer';
import { IVideoResult } from '../types/videoList';

const VideoList = () => {
const dispatch = useDispatch()
const videoItems = useSelector(selectedValue) as IVideoResult

useEffect(() => {
    (async () => {
        await dispatch(getVideoList())
    })()
}, [dispatch])

console.log('videoItems', videoItems)

  return (
    <div>
      Video List
    </div>
  );
};

export default VideoList;