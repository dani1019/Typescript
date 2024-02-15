{
  type Video = {
    id: string;
    title: string;
    url : string;
    data : string;
  };
  
  type VideoMetadata = Pick<Video, 'id' | 'title'>;
  function getVideo(id: string) : Video{
    return{
        id,
        title: 'video',
        url: 'https://..',
        data : 'byte-data..',
    };
  }

  //기존 타입 중 내가 원하는 타입만을 설정해서 사용가능함.
  function getVideoMetadata(id : string): VideoMetadata{
    return {
        id: id,
        title: 'title',
    }
  }
}