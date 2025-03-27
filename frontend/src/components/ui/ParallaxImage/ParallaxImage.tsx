"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader, Mesh } from "three";
import {
  EffectComposer,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";
import React from "react";

const Effects = () => (
  <EffectComposer multisampling={0}>
    <DepthOfField target={[0, 0, 0]} focalLength={0.1} width={1024} />
    <Vignette />
  </EffectComposer>
);

const ParallaxLayer = React.memo(
  ({ texturePath, depth }: { texturePath: string; depth: number }) => {
    const ref = useRef<Mesh>(null!);
    const texture = useLoader(TextureLoader, texturePath);
    const { viewport } = useThree();

    const aspectRatio = 16 / 9;
    const fixedHeight = viewport.height * 0.3;
    const fixedWidth = fixedHeight * aspectRatio;

    useEffect(() => {
      if (ref.current) {
        ref.current.scale.set(fixedWidth, fixedHeight, 1);
        ref.current.position.z = depth;
      }
    }, [fixedWidth, fixedHeight, depth]);

    useFrame(({ mouse }) => {
      if (ref.current) {
        const depthFactor = 1 / (depth + 1);
        const amplitude = depth === 0 ? 0.05 : 0.2;

        ref.current.position.x =
          mouse.x * depthFactor * amplitude * viewport.width;
        ref.current.position.y =
          -mouse.y * depthFactor * amplitude * viewport.height;
      }
    });

    return (
      <mesh ref={ref}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    );
  }
);

const ParallaxEffect = ({ textureUrls }: { textureUrls?: string[] }) => {
  return (
    <>
      {textureUrls?.map((url, index) => (
        <ParallaxLayer texturePath={url} depth={index} />
      ))}
    </>
  );
};

export const ParallaxImage = ({ textureUrls }: any) => {
  return (
    <div className="w-full h-[85vh] overflow-hidden relative">
      <Canvas
        orthographic
        camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}
      >
        <ParallaxEffect textureUrls={textureUrls} />
        <Effects />
      </Canvas>
    </div>
  );
};
