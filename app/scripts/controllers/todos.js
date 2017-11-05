'use strict';

/**
 * @ngdoc function
 * @name nodeAngularApp.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller of the nodeAngularApp
 */

 angular.module("nodeAngularApp")
    .controller("TodosCtrl",['$scope','localStorageService',function(scope,localStorageService){
		// scope.todoList=["wewe"];
		scope.todo="";

		var lsList=localStorageService.get("todoList");
		scope.todoList=lsList?lsList.split("\n"):[];

		scope.$watch("todoList",function(newValue,oldValue){
			if(newValue==oldValue){
				return;
			}
			localStorageService.set("todoList",newValue.join("\n"));
		},true);
		
		scope.addTodos=function(){
			scope.todoList.push(scope.todo);
			scope.todo="";
		};

		scope.removeTodo=function(index){
			scope.todoList.splice(index,1);
		};
    }]);