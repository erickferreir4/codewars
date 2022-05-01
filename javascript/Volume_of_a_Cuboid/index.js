/**
 *	@summary	
 *
 * Bob needs a fast way to calculate the volume of a cuboid with three values: length,
 * width and the height of the cuboid. Write a function to help Bob with this calculation.
 *
 */

//length, width, height

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return (width*height)*length



	}
}


console.log(Kata.getVolumeOfCuboid(1,2,2), 'expected ==>', 4)
console.log(Kata.getVolumeOfCuboid(6.3,2,5), 'expected ==>', 63)
