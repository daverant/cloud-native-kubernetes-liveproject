docker build -t sns-subscription:latest .\subscriptions --no-cache
docker build -t sns-payment:latest .\payments --no-cache

kubectl delete -k ./k8s/manifests
kubectl apply -k ./k8s/manifests
kubectl -n sns get pods --watch