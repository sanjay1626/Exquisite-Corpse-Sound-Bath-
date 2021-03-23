import React from "react";
import Sketch from "react-p5";
//import 'p5/lib/addons/p5.sound';
//import * as p5 from "p5";
//import P5Wrapper from 'react-p5-wrapper';

const Visuals = () => {
  
  let t = 0;
  //let rSlider, gSlider, bSlider;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 500).parent(canvasParentRef);
	p5.colorMode(p5.HSB, 500,100,100);

    

    //rSlider = p5.createSlider(20, 200, 100);
    //rSlider.position(20, 0);
    // gSlider = p5.createSlider(0, 40, 2);
    //gSlider.position(20, 22);
    // bSlider = p5.createSlider(0, 30, 5);
    //bSlider.position(20, 44);
  };

  const draw = (p5) => {
    p5.background(0);
    
    p5.blendMode(p5.BLEND);
    

    //var r = rSlider.value();
    // var g = gSlider.value();
    // var b = bSlider.value();

    function wave(k, max) {
      p5.noFill();
      p5.stroke(p5.color(420, 50, 100));
      p5.strokeWeight(2);
      p5.beginShape();
      for (let i = 0; i < 360; i++) {
        let pos = p5.map(i, 0, 1000, 0, max);
        let y = 15 * p5.sin(p5.radians(i + k));
        p5.vertex(pos, y);
      }
      p5.endShape();
    }
    function wave2(k, max) {
      p5.noFill();
      p5.stroke(p5.color(150, 40, 100));
      p5.strokeWeight(2);
      p5.beginShape();
      for (let i = 0; i < 360; i++) {
        let pos = p5.map(i, 0, 1100, 0, max);
        let y = 48 * p5.sin(p5.radians(i + k));
        p5.vertex(pos, y);
      }
      p5.endShape();
    }
    function wave3(k, max) {
      p5.noFill();
      p5.stroke(p5.color(250, 70, 100));
      p5.strokeWeight(2);
      p5.beginShape();
      for (let i = 0; i < 360; i++) {
        let pos = p5.map(i, 0, 1100, 0, max);
        let y = 22 * p5.sin(p5.radians(i + k));
        p5.vertex(pos, y);
      }
      p5.endShape();
    }
    function star(m, dir, val, N) {
      for (let i = 0; i < N; i++) {
        let ang = (dir * i * 360) / N;
        let x = 100 * p5.cos(p5.radians(ang) + (p5.PI / 4) * dir);
        let y = 100 * p5.sin(p5.radians(ang) + (p5.PI / 4) * dir);
        p5.push();
        p5.translate(x, y);
        p5.rotate(p5.radians(ang));
        wave(m, val);
        p5.pop();
      }
    }
    function star2(m, dir, val, N) {
      for (let i = 0; i < N; i++) {
        let ang = (dir * i * 360) / N;
        let x = 100 * p5.cos(p5.radians(ang) + (p5.PI / 4) * dir);
        let y = 100 * p5.sin(p5.radians(ang) + (p5.PI / 4) * dir);
        p5.push();
        p5.translate(x, y);
        p5.rotate(p5.radians(ang));
        wave2(m, val);
        p5.pop();
      }
    }
    function star3(m, dir, val, N) {
      for (let i = 0; i < N; i++) {
        let ang = (dir * i * 360) / N;
        let x = 100 * p5.cos(p5.radians(ang) + (p5.PI / 2) * dir);
        let y = 100 * p5.sin(p5.radians(ang) + (p5.PI / 2) * dir);
        p5.push();
        p5.translate(x, y);
        p5.rotate(p5.radians(ang));
        wave3(m, val);
        p5.pop();
      }
    }
    //STARS//
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    star(t, 4, 200, 11);
    star(t, -3, 300, 11);
    t -= 2;
    p5.translate(p5.width / 0, p5.height * 0.1);
    star2(t, 2, 200, 12);
    star2(t, 1, 300, 12);
    t -= 3;
    p5.translate(p5.width / 0, p5.height * -0.1);
    star3(t, 3, 300, 13);
    star3(t, 2, 300, 13);
    t -= 3;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Visuals;