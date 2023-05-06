function editProfile(id, gender, university, bucketlist, gym) {
    const url = `/profile/${id}/edit?gender=${gender}&university=${university}&bucketlist=${bucketlist}&gym=${gym}`;
    window.location.href = url;
  }