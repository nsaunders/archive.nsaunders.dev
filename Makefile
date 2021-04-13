.PHONY: public
.PHONY: project_mesa_sports_grill

public: project_mesa_sports_grill
	rm -rf public
	mkdir public
	echo "archive.nsaunders.dev" >> public/CNAME
	mv mesa-sports-grill/dist public/mesa-sports-grill

project_mesa_sports_grill:
	$(MAKE) -C mesa-sports-grill
