kubectl delete all --all -n sns

docker build -t sns-subscription:latest .\subscriptions --no-cache
docker build -t sns-payment:latest .\payments --no-cache

kubectl apply -k ./k8s/manifests
kubectl -n sns get pods --watch