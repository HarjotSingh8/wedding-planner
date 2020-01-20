let prt=[]
let d;


function setupParticles() {
  for(let i=0; i<numParticles; i++) {
    prt.push([random(0, windowWidth), random(0, windowHeight), random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed)]);
  }
}

function updateParticles() {
  if(framesRepulsed>0)
    framesRepulsed--;
  for(let i=0; i<numParticles; i++) {
    ellipse(prt[i][0], prt[i][1], particleRad, particleRad);
    prt[i][0]+=prt[i][2]
    prt[i][1]+=prt[i][3]
    d = distance( prt[i][0], prt[i][1], mouseX, mouseY )
    if(d<forceDist && framesRepulsed>0) {
      calcForce(i);
    }
    if(numParticles<maxParticles) {
      if(prt[i][0]>windowWidth+joinDistance)
        prt[i][0]=-joinDistance;
      if(prt[i][0]<-joinDistance)
        prt[i][0]=windowWidth+joinDistance;
      if(prt[i][1]>windowHeight+joinDistance)
        prt[i][1]=-joinDistance;
      if(prt[i][1]<-joinDistance)
        prt[i][1]=windowHeight+joinDistance;
    }
    else {
      if(prt[i][0]>windowWidth+joinDistance)
        {
          prt.splice(i, 1);
          numParticles--;
          continue;
        }
      else if(prt[i][0]<-joinDistance)
      {
        prt.splice(i, 1);
        numParticles--;
        continue;
      }
      else if(prt[i][1]>windowHeight+joinDistance)
      {
        prt.splice(i, 1);
        numParticles--;
        continue;
      }
      else if(prt[i][1]<-joinDistance)
      {
        prt.splice(i, 1);
        numParticles--;
        continue;
      }
      }

      let m = windowWidth;
      let c = 0;
    for(let j=0; j<numParticles; j++) {
      d=distance(prt[i][0], prt[i][1], prt[j][0], prt[j][1]);
      if(d<joinDistance) {
        c++;
        stroke(fillclr-d*(fillclr-bgclr)/(joinDistance), fillclr-d*(fillclr-20)/(joinDistance), fillclr-d*(fillclr-40)/(joinDistance))
        line(prt[i][0], prt[i][1], prt[j][0], prt[j][1]);
        //noStroke();
      }
      if(c>linecount)
        break;
      if(d<m)
        m=d;
    }
    noStroke()
    //ellipse(prt[i][0], prt[i][1], particleRad-m*(particleRad)/(joinDistance), particleRad-m*(particleRad)/(joinDistance))
  }
}

function distance(a, b, c, d) {
  return sqrt( (a-c)*(a-c) + (b-d)*(b-d) )
}

function calcForce(i) {
  d=distance(prt[i][0], prt[i][1], mouseX, mouseY);
  if(d<forceDist) {
    let x =(forceDist-d)/forceCoeff;
    let t1 = 0
    let t2 = 0
    if(mouseX>prt[i][0])
      t1=mouseX-prt[i][0];
    else
      t1=prt[i][0]-mouseX;
    if(mouseY>prt[i][1])
      t2=mouseY-prt[i][1];
    else
      t2=prt[i][1]-mouseY;

    if(mouseX>prt[i][0])
      prt[i][0]-=x*t1/t2;
    else
      prt[i][0]+=x*t1/t2;
    if(mouseY>prt[i][1])
      prt[i][1]-=x*t2/t1;
    else
      prt[i][1]+=x*t2/t1;
  }
}
