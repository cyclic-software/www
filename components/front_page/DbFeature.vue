<template>
    <b-container class="hubble">
    <b-row>
    <b-col sm="6">
      <h2 class="">Database and Storage</h2>
      <p>
        Cyclic apps get you access to the best AWS has to offer.
        <br>
        Industry leading NoSQL <strong>AWS DynamoDB</strong> and <strong>AWS S3</strong> storage directly integrated.
        <br>
        <br>
          <em>AWS account not required.</em>
        </p>
      </b-col>
      <b-col sm="6" class="text-right">
        <div class="aws-grid">
          <img class="aws-logo" width="150px" src="/images/amazon-logo.png"/>
          <img class="dynamo-logo" width="180px" src="/images/amazon-dynamodb-logo.png"/>
          <img class="s3-logo" width="200px" src="/images/amazon-s3.png"/>
        </div>
      </b-col>

    </b-row>

  </b-container>

</template>

<style scoped>
h2{
  font-size: 30px;
  font-weight: 100;
}
p {
  color: var(--h-white)
}
p strong {
  color: orange;;
}


.hubble {
  position: relative;
  padding: 100px;
  height: 400px;
  display: block;
  /* background-image: url('/images/hubble.jpg'); */
  /* background-size: cover; */
  background-image: radial-gradient(circle at right,rgba(0,0,0,0) 1%,black),url(/images/hubble.jpg);

}

.aws-grid{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr;
}
.aws-grid img{
  filter:  invert(100%);
}
.aws-logo{
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: center;;
  justify-self: center;;
}
.dynamo-logo{
  grid-column-start: 2;
  grid-row-start: 1;
}
.s3-logo{
  grid-column-start: 2;
  grid-row-start: 2;
  margin-left: -10px;
}
/* .hubble:after {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  box-shadow: inset 0px 0px 150px black;
} */


</style>