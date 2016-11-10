

db.products.aggregate([
  {
	$match: {
  	"category": "Television"
	}
  },
 {$unwind: "$attributes"},
 {$match: {"attribute.name": "Screen Size"}},
 {$bucketAuto: {
      	groupBy: "$attributes.value",
      	buckets: 4
    	}}
])


db.products.find({
	
})