(function(angular, undefined) {
  angular.module("brainz21App.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"student",
		"teacher",
		"admin"
	]
})

;
})(angular);