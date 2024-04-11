import { Title } from '@/interfaces/movie'
import { Episode } from '@/interfaces/serie'
import { useMovieStore } from '@/store/movies-store'
import { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'

interface Props {
  episodeId: string
}

export const EpisodeItem = ({ episodeId }: Props) => {

  const [episodeInfo, setEpisodeInfo] = useState<Title>()
  const getEpisodeInfo = useMovieStore((state) => state.getEpisodeInfo)

  useEffect(() => {
    getEpisodeInfo(episodeId).then((data) => {
      setEpisodeInfo(data)
    })
  },[episodeId])

  return (
    <View>
      <Text>{episodeInfo?.titleText?.text}</Text>

    </View>
  )
}
