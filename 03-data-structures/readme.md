## Data Structures
Data structures is an abstraction of how we store data/values in programming. Data Structures give us a way to desribe how a collection of data is stored and managed. *Every data structure is strong at doing somethings but weak at doing others.*

### Why Data Structures?
To understand why data structures are important, we need context on how a computer stores information.
#### RAM (Random Access Memory)
* Working memory for computer, relatively quick to read and write information onto the RAM. Loses state when computer is turned off. RAM can be thought of as a colletion of shelfs, each capable of storing 8-bits (eight switches either on or off) of information.
#### Storage (HHD, SSD)
* Persistent memory, takes longer to read and write information but data persists even when computer is turned off.
#### Cache
* Memory that is built in directly to the CPU. Consequently, is the quickest to read and write but limite in terms of space.  

Data structures are important because data take up physical space on either our RAM, Storage, or cache. Each variable declared takes up certain amounts of "shelves" on our RAM. Accessing "shelves" that are next to each other is quicker than accessing "shelves" that are further apart. **Data structures allow us to organize the memory usage to optimize the read/write that our CPU has to do.**

### Common Actions Performed on Data-Structures
* Insertion
* Deletion
* Traversal
* Searching
* Sort
* Access