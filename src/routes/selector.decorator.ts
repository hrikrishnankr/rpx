export default function Selector(selectorObject: any) {
	console.log(selectorObject)
    return function (targetComponent: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(propertyKey);
    }
}