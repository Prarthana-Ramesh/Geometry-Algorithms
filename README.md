# **Visualization of Geometric Algorithms**

## **Overview**
This project brings fundamental geometric algorithms to life through interactive, web-based visualizations. Leveraging JavaScript and HTML5 Canvas, users can engage with these algorithms in real-time, deepening their understanding of computational geometry concepts.
[DEMO](https://prarthana-ramesh.github.io/Geometry-Algorithms/)
## **Implemented Algorithms**

### **2D Convex Hull**
A convex hull is the smallest convex boundary that encloses a set of points in 2D space. The Monotone Chain algorithm is used to construct this boundary efficiently, ensuring all points are either on or inside the hull.

### **3D Convex Hull**
Extending the concept of the convex hull into three dimensions, this algorithm computes a convex boundary for a set of points in 3D space. It is visualized using the powerful Three.js library, allowing users to rotate and explore the geometry interactively.

### **KD Tree Search**
The KD Tree (K-Dimensional Tree) is a data structure used for efficient spatial partitioning. It divides space into hierarchical regions, making it ideal for tasks like range searching and nearest neighbor queries.

### **Delaunay Triangulation**
This algorithm partitions a set of points into triangles such that no point lies inside the circumcircle of any triangle. Delaunay Triangulation ensures the triangles are as equiangular as possible, which is crucial for applications in computer graphics and finite element analysis.

### **Voronoi Diagram**
A Voronoi Diagram divides space into regions based on the proximity to a set of seed points. Each region contains all points closer to its seed than to any other. Fortune's algorithm efficiently constructs these diagrams, which are widely used in fields like GIS and physics simulations.

