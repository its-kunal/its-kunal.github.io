"use client";
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import useMediaQuery from "@/hooks/useMediaQuery";

type DataType = {
  name: string;
  children?: DataType[];
  value?: number;
};

interface ExtendedHierarchyRectangularNode
  extends d3.HierarchyRectangularNode<DataType> {
  clipUid: string;
  nodeUid: string;
}

interface ExtendedSelection
  extends d3.Selection<
    SVGGElement,
    ExtendedHierarchyRectangularNode,
    SVGSVGElement,
    unknown
  > {
  id: string;
}

interface NestedTreeMapProps {
  data: DataType;
}

const TreeMap: React.FC<NestedTreeMapProps> = ({
  data,
}: {
  data: DataType;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { height, width } = useMediaQuery();
  const [dimension, setDimesion] = useState({ width: 500, height: 400 });

  useEffect(() => {
    if (width >= 425) {
      setDimesion({ width: 900, height: 600 });
    } else {
      setDimesion({ width: 600, height: 800 });
    }
  }, [width, height]);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const width = dimension.width;
    const height = dimension.height;
    const color = d3.scaleSequential([8, 0], d3.interpolateCubehelixDefault);

    // Create the treemap layout.
    const treemap = (data: DataType) =>
      d3
        .treemap<DataType>()
        .size([width, height])
        .paddingOuter(3)
        .paddingTop(19)
        .paddingInner(1)
        .round(true)(
        d3
          .hierarchy<DataType>(data)
          .sum((d) => d.value || 0)
          .sort((a, b) => (b.value || 0) - (a.value || 0))
      );
    const root = treemap(data);

    // Remove any existing map
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the SVG container.
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr(
        "style",
        "max-width: 100%; height: auto; overflow: visible; font: 12px sans-serif;" // Increased font size
      );

    const shadowId = `shadow-${Math.random().toString(36).substr(2, 9)}`;

    svg
      .append("filter")
      .attr("id", shadowId)
      .append("feDropShadow")
      .attr("flood-opacity", 0.3)
      .attr("dx", 0)
      .attr("stdDeviation", 3);

    const node = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
      .attr("filter", `url(#${shadowId})`);

    const format = d3.format(",d");
    node.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .reverse()
          .map((d) => (d.data as DataType).name)
          .join(" / ")}`
    );

    node
      .append("rect")
      .attr(
        "id",
        (d) =>
          ((
            d as ExtendedHierarchyRectangularNode
          ).nodeUid = `node-${Math.random().toString(36).substr(2, 9)}`)
      )
      .attr("fill", (d) => color(d.height))
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    node
      .append("clipPath")
      .attr(
        "id",
        (d) =>
          ((
            d as ExtendedHierarchyRectangularNode
          ).clipUid = `clip-${Math.random().toString(36).substr(2, 9)}`)
      )
      .append("use")
      .attr(
        "xlink:href",
        (d) => `#${(d as ExtendedHierarchyRectangularNode).nodeUid}`
      );

    node
      .append("text")
      .attr(
        "clip-path",
        (d) => `url(#${(d as ExtendedHierarchyRectangularNode).clipUid})`
      )
      .selectAll("tspan")
      .data((d) => (d.data as DataType).name.split(/(?=[A-Z][^A-Z])/g))
      .join("tspan")
      .attr("fill-opacity", (d, i, nodes) =>
        i === nodes.length - 1 ? 0.7 : null
      )
      .text((d) => d);

    node
      .filter((d) => d.children !== undefined)
      .selectAll("tspan")
      .attr("dx", 3)
      .attr("y", 13);

    node
      .filter((d) => !d.children)
      .selectAll("tspan")
      .attr("x", 3)
      .attr(
        "y",
        (d, i, nodes) => `${(i === nodes.length - 1 ? 0.3 : 0) + i+ 1.1 * 0.9}em`
      );
  }, [data, dimension]);

  return <svg ref={svgRef}></svg>;
};

export default TreeMap;
