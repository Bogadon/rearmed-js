# Changelog

- `v1.1.0` - June 2, 2017
  * Fix `Object#all` when called with no callback function. Now defaults to if all values are truthy.
  * Add Array `range` method
  * Move all Object patches under `Object.prototype.rearmed()` and `Object.rearmed` method to fix issue #2
  * Add `Object#rearmed.add()` and `Object.rearmed.remove()` methods for adding or removing methods to rearmed objects
  * Add `Core#equals` which is the same as the ones used for `Array#equals` and `Object#equals`
- `v1.0.0` - May 6, 2017
  * Allow `all` and `any` methods without a callback
  * Fix some method warnings
  * Restructure directories because you cant define a root folder in npm... gross.
  * Hookup to travis-ci
- `v0.9.0` - February 1, 2017
  * First Release